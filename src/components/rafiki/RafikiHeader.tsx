
import React from "react";

const RafikiHeader = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <span className="font-bold text-lg">R</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Rafiki</h1>
          <p className="text-muted-foreground">Your AI investment assistant</p>
        </div>
      </div>
    </div>
  );
};

export default RafikiHeader;
