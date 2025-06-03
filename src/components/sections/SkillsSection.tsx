import { SKILLS_DATA } from '@/lib/constants';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Skill } from '@/lib/types';

const groupSkillsByCategory = (skills: Skill[]) => {
  return skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
};


export function SkillsSection() {
  const groupedSkills = groupSkillsByCategory(SKILLS_DATA);

  return (
    <SectionWrapper
      id="skills"
      title="My Expertise"
      subtitle="A versatile skill set honed through years of experience in building diverse digital solutions."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => (
          <div key={category} className="animate-slide-in" style={{ animationDelay: `${categoryIndex * 0.15 + 0.2}s`, animationFillMode: 'backwards' }}>
            <Card className="h-full transform transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl md:text-2xl text-primary">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <Badge key={skill.id} variant="outline" className="py-2 px-3 text-sm flex items-center gap-2 border-primary/50 text-primary/90 bg-primary/5 hover:bg-primary/10 transition-colors">
                        {IconComponent && <IconComponent className="h-4 w-4" />}
                        {skill.name}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg text-muted-foreground">
          With over <span className="font-bold text-primary">X years of experience</span>, I&apos;ve had the privilege to work on various exciting projects, continuously learning and adapting to new technologies.
        </p>
      </div>
    </SectionWrapper>
  );
}
