
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp, User, Building } from "lucide-react";

// Trophy icon component
const Trophy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

interface LeaderboardUser {
  id: number;
  position: number;
  username: string;
  avatar: string;
  points: number;
}

interface LeaderboardInstitution {
  id: number;
  position: number;
  name: string;
  avatar: string;
  points: number;
}

interface LeaderboardsProps {
  individualLeaderboard: LeaderboardUser[];
  institutionLeaderboard: LeaderboardInstitution[];
}

const Leaderboards: React.FC<LeaderboardsProps> = ({
  individualLeaderboard,
  institutionLeaderboard
}) => {
  const [leaderboardTab, setLeaderboardTab] = useState("individuals");

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Leaderboards
        </CardTitle>
        <CardDescription>Top performers in the GELT community</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="individuals" onValueChange={setLeaderboardTab}>
          <TabsList className="grid grid-cols-2 mb-3">
            <TabsTrigger value="individuals">
              <User className="h-4 w-4 mr-2" /> Individuals
            </TabsTrigger>
            <TabsTrigger value="institutions">
              <Building className="h-4 w-4 mr-2" /> Institutions
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="individuals" className="mt-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Position</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead className="text-right">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {individualLeaderboard.map(user => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      {user.position === 1 ? (
                        <span className="text-amber-500 font-bold flex items-center gap-1">
                          1 <Trophy className="h-4 w-4" />
                        </span>
                      ) : user.position}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.username[0]}</AvatarFallback>
                        </Avatar>
                        <span>{user.username}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium text-primary">
                      {user.points}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-muted/30 border-t-2">
                  <TableCell className="font-medium">24</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>Y</AvatarFallback>
                      </Avatar>
                      <span>You</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium text-primary">
                    312
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          
          <TabsContent value="institutions" className="mt-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Position</TableHead>
                  <TableHead>Institution</TableHead>
                  <TableHead className="text-right">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {institutionLeaderboard.map(inst => (
                  <TableRow key={inst.id}>
                    <TableCell className="font-medium">
                      {inst.position === 1 ? (
                        <span className="text-amber-500 font-bold flex items-center gap-1">
                          1 <Trophy className="h-4 w-4" />
                        </span>
                      ) : inst.position}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={inst.avatar} />
                          <AvatarFallback>{inst.name[0]}</AvatarFallback>
                        </Avatar>
                        <span>{inst.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium text-primary">
                      {inst.points}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Leaderboards;
