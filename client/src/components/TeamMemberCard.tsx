import { Mail } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TeamMember } from '@/data/team';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-primary/10">
          {member.image ? (
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-3xl font-bold text-muted-foreground">
                {member.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold text-center">{member.name}</h3>
        <p className="text-sm text-muted-foreground text-center">{member.role}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{member.bio}</p>
        
        <div>
          <p className="text-sm font-medium mb-2">Expertise:</p>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t">
          <a 
            href={`mailto:${member.email}`}
            className="flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Mail className="h-4 w-4" />
            {member.email}
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
