import React, { useEffect, useRef, useState, useCallback } from 'react';

const DEFAULT_TEXT = "GELT";
const DEFAULT_FONT_FAMILY = "'Roboto Mono', monospace";

// --- Physics Parameters Object (defaults) ---
const initialPhysicsParams = {
    PARTICLE_COUNT_TARGET: 4000,
    PARTICLE_BASE_SIZE: 1.3,
    ATTRACTION_FORCE_BASE: 0.10,
    NOISE_STRENGTH_BASE: 0.4,
    FRICTION: 0.95,
    MOUSE_INTERACTION_RADIUS: 90,
    MOUSE_DISPERSE_STRENGTH: 1.2,
    TRAIL_ALPHA: 0.22
};

// --- Static Configuration ---
const POINT_SAMPLING_DENSITY = 4;
const TARGET_CANVAS_FILL_PERCENTAGE = 0.70;
const MAX_INITIAL_FONT_SIZE = 350;
const MIN_FONT_SIZE = 10;
const FIT_CHECK_PADDING = 25;
const SETTLE_DISTANCE_THRESHOLD = 4;
const SETTLE_ATTRACTION_MULTIPLIER = 0.15;
const SETTLE_NOISE_MULTIPLIER = 0.7;

const thermalPalettes = {
    neutral: ['#8b5cf6', '#a855f7', '#9333ea', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95', '#581c87', '#6b46c1', '#7c2d12', '#e879f9'],
};
const PARTICLE_COLORS = [...thermalPalettes.neutral];

class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    targetX: number;
    targetY: number;
    physicsParams: typeof initialPhysicsParams;
    baseSize: number;
    size: number;
    color: string;
    attractionOffset: number;
    noiseOffset: number;

    constructor(targetX: number, targetY: number, canvasWidth: number, canvasHeight: number, physicsParams: typeof initialPhysicsParams) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 6;
        this.vy = (Math.random() - 0.5) * 6;
        this.targetX = targetX;
        this.targetY = targetY;
        this.physicsParams = physicsParams;
        this.baseSize = this.physicsParams.PARTICLE_BASE_SIZE;
        this.size = this.baseSize + Math.random() * (this.baseSize * 0.5);
        this.color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
        this.attractionOffset = (Math.random() - 0.5) * 0.04;
        this.noiseOffset = (Math.random() - 0.5) * 0.2;
    }

    update(mouse: { x?: number; y?: number }) {
        if (this.baseSize !== this.physicsParams.PARTICLE_BASE_SIZE) {
            this.baseSize = this.physicsParams.PARTICLE_BASE_SIZE;
        }
        this.size = this.baseSize + Math.random() * (this.baseSize * 0.5);

        const dxTarget = this.targetX - this.x;
        const dyTarget = this.targetY - this.y;
        const distTarget = Math.sqrt(dxTarget * dxTarget + dyTarget * dyTarget);

        let currentAttraction = Math.max(0.001, this.physicsParams.ATTRACTION_FORCE_BASE + this.attractionOffset);
        let currentNoise = Math.max(0, this.physicsParams.NOISE_STRENGTH_BASE + this.noiseOffset);

        if (distTarget < SETTLE_DISTANCE_THRESHOLD) {
            currentAttraction *= SETTLE_ATTRACTION_MULTIPLIER;
            currentNoise *= SETTLE_NOISE_MULTIPLIER;
        } else if (distTarget < SETTLE_DISTANCE_THRESHOLD * 4) {
            const factor = Math.max(0, (distTarget - SETTLE_DISTANCE_THRESHOLD) / (SETTLE_DISTANCE_THRESHOLD * 3));
            currentAttraction = currentAttraction * (SETTLE_ATTRACTION_MULTIPLIER + (1 - SETTLE_ATTRACTION_MULTIPLIER) * factor);
            currentNoise = currentNoise * (SETTLE_NOISE_MULTIPLIER + (1 - SETTLE_NOISE_MULTIPLIER) * factor);
        }

        let forceX = 0;
        let forceY = 0;

        if (mouse.x !== undefined && mouse.y !== undefined) {
            const dxMouse = this.x - mouse.x;
            const dyMouse = this.y - mouse.y;
            const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

            if (distMouse < this.physicsParams.MOUSE_INTERACTION_RADIUS && distMouse > 0) {
                const angleMouse = Math.atan2(dyMouse, dxMouse);
                const disperseForce = (this.physicsParams.MOUSE_INTERACTION_RADIUS - distMouse) / this.physicsParams.MOUSE_INTERACTION_RADIUS * this.physicsParams.MOUSE_DISPERSE_STRENGTH;
                forceX += Math.cos(angleMouse) * disperseForce;
                forceY += Math.sin(angleMouse) * disperseForce;
                currentAttraction *= 0.1;
            }
        }

        if (distTarget > 0.01) {
            forceX += (dxTarget / distTarget) * currentAttraction * Math.min(distTarget, 100) * 0.1;
            forceY += (dyTarget / distTarget) * currentAttraction * Math.min(distTarget, 100) * 0.1;
        }

        forceX += (Math.random() - 0.5) * currentNoise;
        forceY += (Math.random() - 0.5) * currentNoise;

        this.vx += forceX;
        this.vy += forceY;
        this.vx *= this.physicsParams.FRICTION;
        this.vy *= this.physicsParams.FRICTION;
        this.x += this.vx;
        this.y += this.vy;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.2, this.size), 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = Math.min(5, this.size * 1.5);
        ctx.fill();
    }
}

const ParticleTypography = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesArrayRef = useRef<Particle[]>([]);
    const wordTargetPointsRef = useRef<Array<{ x: number; y: number; sourceCanvasWidth: number; sourceCanvasHeight: number; isEmptyPlaceholder?: boolean }>>([]);
    const mouseRef = useRef<{ x?: number; y?: number }>({ x: undefined, y: undefined });
    const animationFrameIdRef = useRef<number | null>(null);
    const physicsParamsRef = useRef({...initialPhysicsParams});
    const initialParticleCountCalculatedRef = useRef(false);

    const getWordPoints = useCallback((word: string, mainCanvasWidth: number, mainCanvasHeight: number) => {
        const points: Array<{ x: number; y: number; sourceCanvasWidth: number; sourceCanvasHeight: number; isEmptyPlaceholder?: boolean }> = [];
        if (!word || word.trim() === "" || mainCanvasWidth <= 0 || mainCanvasHeight <= 0) {
            console.warn("getWordPoints: Invalid word or canvas dimensions.");
            return [{ x: 0, y: 0, sourceCanvasWidth: mainCanvasWidth, sourceCanvasHeight: mainCanvasHeight, isEmptyPlaceholder: true }];
        }

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = mainCanvasWidth;
        tempCanvas.height = mainCanvasHeight;
        const tempCtx = tempCanvas.getContext('2d');
        if (!tempCtx) return points;
        
        const normalizedWord = word.toUpperCase();
        const fontToUse = DEFAULT_FONT_FAMILY;
        let optimalFontSize = MIN_FONT_SIZE;

        for (let fs = MAX_INITIAL_FONT_SIZE; fs >= MIN_FONT_SIZE; fs -= 2) {
            tempCtx.font = `bold ${fs}px ${fontToUse}`;
            const textMetrics = tempCtx.measureText(normalizedWord);
            const textWidthWithPadding = textMetrics.width + FIT_CHECK_PADDING;
            const textHeightWithPadding = (textMetrics.actualBoundingBoxAscent || fs * 0.75) +
                                          (textMetrics.actualBoundingBoxDescent || fs * 0.25) +
                                          FIT_CHECK_PADDING;
            if (textWidthWithPadding < mainCanvasWidth * TARGET_CANVAS_FILL_PERCENTAGE &&
                textHeightWithPadding < mainCanvasHeight * TARGET_CANVAS_FILL_PERCENTAGE) {
                optimalFontSize = fs;
                break;
            }
        }

        tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
        tempCtx.font = `bold ${optimalFontSize}px ${fontToUse}`;
        tempCtx.fillStyle = 'white';
        tempCtx.textAlign = 'center';
        tempCtx.textBaseline = 'middle';
        tempCtx.fillText(normalizedWord, tempCanvas.width / 2, tempCanvas.height / 2);

        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const data = imageData.data;
        for (let y = 0; y < tempCanvas.height; y += POINT_SAMPLING_DENSITY) {
            for (let x = 0; x < tempCanvas.width; x += POINT_SAMPLING_DENSITY) {
                const alphaIndex = (y * tempCanvas.width + x) * 4 + 3;
                if (data[alphaIndex] > 128) {
                    points.push({ x: x, y: y, sourceCanvasWidth: mainCanvasWidth, sourceCanvasHeight: mainCanvasHeight });
                }
            }
        }
        if (points.length === 0) {
            console.warn("getWordPoints: No points found. Returning placeholder.");
            return [{ x: 0, y: 0, sourceCanvasWidth: mainCanvasWidth, sourceCanvasHeight: mainCanvasHeight, isEmptyPlaceholder: true }];
        }
        return points;
    }, []);

    const initParticles = useCallback((forceRepopulateParticles = true, forceRecalculatePoints = true) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const currentWord = DEFAULT_TEXT.toUpperCase();

        if (forceRecalculatePoints || wordTargetPointsRef.current.length === 0 ||
            (wordTargetPointsRef.current.length > 0 && !wordTargetPointsRef.current[0].isEmptyPlaceholder && (wordTargetPointsRef.current[0].sourceCanvasWidth !== canvas.width || wordTargetPointsRef.current[0].sourceCanvasHeight !== canvas.height)) ||
            (wordTargetPointsRef.current.length > 0 && wordTargetPointsRef.current[0].isEmptyPlaceholder && (wordTargetPointsRef.current[0].sourceCanvasWidth !== canvas.width || wordTargetPointsRef.current[0].sourceCanvasHeight !== canvas.height))
        ) {
            console.log(`Recalculating word points for canvas: ${canvas.width}x${canvas.height} for word: ${currentWord}`);
            wordTargetPointsRef.current = getWordPoints(currentWord, canvas.width, canvas.height);

            if (!initialParticleCountCalculatedRef.current && wordTargetPointsRef.current.length > 0 && !wordTargetPointsRef.current[0].isEmptyPlaceholder) {
                const particleCountStep = 100;
                const particleCountMin = 500;
                const particleCountMax = 10000;
                const INITIAL_PARTICLES_PER_TARGET_POINT_RATIO = 1.0;

                let dynamicParticleCount = wordTargetPointsRef.current.length * INITIAL_PARTICLES_PER_TARGET_POINT_RATIO;
                dynamicParticleCount = Math.round(
                    Math.max(particleCountMin, Math.min(particleCountMax, dynamicParticleCount)) / particleCountStep
                ) * particleCountStep;

                physicsParamsRef.current.PARTICLE_COUNT_TARGET = dynamicParticleCount;
                console.log(`Dynamically adjusted PARTICLE_COUNT_TARGET to: ${dynamicParticleCount}`);
                initialParticleCountCalculatedRef.current = true;
            } else if (!initialParticleCountCalculatedRef.current) {
                 initialParticleCountCalculatedRef.current = true;
                 console.log("Initial dynamic particle count calculation skipped, using default.");
            }
        }

        if (forceRepopulateParticles || particlesArrayRef.current.length !== physicsParamsRef.current.PARTICLE_COUNT_TARGET) {
            particlesArrayRef.current = [];
            const count = physicsParamsRef.current.PARTICLE_COUNT_TARGET;
            if (wordTargetPointsRef.current.length === 0 || (wordTargetPointsRef.current.length > 0 && wordTargetPointsRef.current[0].isEmptyPlaceholder)) {
                console.warn("Initializing particles with random targets.");
                for (let i = 0; i < count; i++) {
                    particlesArrayRef.current.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height, canvas.width, canvas.height, physicsParamsRef.current));
                }
            } else {
                for (let i = 0; i < count; i++) {
                    const targetPoint = wordTargetPointsRef.current[i % wordTargetPointsRef.current.length];
                    particlesArrayRef.current.push(new Particle(targetPoint.x, targetPoint.y, canvas.width, canvas.height, physicsParamsRef.current));
                }
            }
        } else {
            particlesArrayRef.current.forEach((p, i) => {
                if (wordTargetPointsRef.current.length > 0 && !wordTargetPointsRef.current[0].isEmptyPlaceholder) {
                    const targetPoint = wordTargetPointsRef.current[i % wordTargetPointsRef.current.length];
                    p.targetX = targetPoint.x;
                    p.targetY = targetPoint.y;
                } else {
                    p.targetX = Math.random() * canvas.width;
                    p.targetY = Math.random() * canvas.height;
                }
                p.color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
                p.baseSize = physicsParamsRef.current.PARTICLE_BASE_SIZE;
            });
        }
    }, [getWordPoints]);

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        ctx.fillStyle = `rgba(0, 0, 0, ${physicsParamsRef.current.TRAIL_ALPHA})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';

        particlesArrayRef.current.forEach(particle => {
            particle.update(mouseRef.current);
            particle.draw(ctx);
        });
        
        ctx.shadowBlur = 0; 
        ctx.shadowColor = 'transparent';
        animationFrameIdRef.current = requestAnimationFrame(animate);
    }, []);

    const adjustLayout = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const containerRect = canvas.parentElement?.getBoundingClientRect();
        const newCanvasWidth = containerRect?.width || window.innerWidth / 2;
        const newCanvasHeight = containerRect?.height || window.innerHeight;

        if (canvas.width !== newCanvasWidth || canvas.height !== newCanvasHeight) {
            canvas.width = newCanvasWidth;
            canvas.height = newCanvasHeight;
            console.log(`Canvas resized to ${canvas.width}x${canvas.height}. Re-initializing.`);
            initParticles(false, true);
        }
    }, [initParticles]);

    useEffect(() => {
        const fontInter = new FontFace('Inter', 'url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2)');
        const fontRobotoMono = new FontFace('Roboto Mono', 'url(https://fonts.gstatic.com/s/robotomono/v22/L0x5DF4xlVMF-BfR8bXMIjhGq3-cXbKDO1k.woff2)');
        
        const fontLoadingPromise = Promise.all([fontInter.load(), fontRobotoMono.load()])
            .then((loadedFonts) => {
                loadedFonts.forEach(font => document.fonts.add(font));
                return document.fonts.ready;
            })
            .then(() => {
                console.log('Fonts loaded and ready');
            })
            .catch(err => {
                console.error("Font loading failed:", err);
            });

        fontLoadingPromise.finally(() => {
            adjustLayout(); 
            initParticles(true, true); 
            if (!animationFrameIdRef.current) {
                animate();
            }
        });

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvasRef.current?.getBoundingClientRect();
            if (rect) {
                mouseRef.current = { x: event.clientX - rect.left, y: event.clientY - rect.top };
            }
        };
        const handleMouseLeave = () => {
            mouseRef.current = { x: undefined, y: undefined };
        };
        const handleTouchMove = (event: TouchEvent) => {
            event.preventDefault();
            const rect = canvasRef.current?.getBoundingClientRect();
            if (rect && event.touches.length > 0) {
                mouseRef.current = { x: event.touches[0].clientX - rect.left, y: event.touches[0].clientY - rect.top };
            }
        };
        const handleTouchEnd = () => {
            mouseRef.current = { x: undefined, y: undefined };
        };

        const canvasElement = canvasRef.current;
        canvasElement?.addEventListener('mousemove', handleMouseMove);
        canvasElement?.addEventListener('mouseleave', handleMouseLeave);
        canvasElement?.addEventListener('touchmove', handleTouchMove, { passive: false });
        canvasElement?.addEventListener('touchend', handleTouchEnd);
        canvasElement?.addEventListener('touchcancel', handleTouchEnd);

        let resizeTimer: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (animationFrameIdRef.current) {
                    cancelAnimationFrame(animationFrameIdRef.current);
                    animationFrameIdRef.current = null;
                }
                requestAnimationFrame(() => {
                    adjustLayout();
                    if (!animationFrameIdRef.current) {
                         animate();
                    }
                });
            }, 250);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
            canvasElement?.removeEventListener('mousemove', handleMouseMove);
            canvasElement?.removeEventListener('mouseleave', handleMouseLeave);
            canvasElement?.removeEventListener('touchmove', handleTouchMove);
            canvasElement?.removeEventListener('touchend', handleTouchEnd);
            canvasElement?.removeEventListener('touchcancel', handleTouchEnd);
            window.removeEventListener('resize', handleResize);
        };
    }, [adjustLayout, animate, initParticles]);

    return (
        <canvas 
            ref={canvasRef} 
            style={{ display: 'block', backgroundColor: '#000000', borderRadius: 0 }}
            className="w-full h-full"
        />
    );
};

export default ParticleTypography;
