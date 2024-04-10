import { ElementInView } from "@/utils/Element";
import Technology from "./Technology";
import {
  DatabaseStack,
  EnvironmentStack,
  FamiliarWithStack,
  FrameworkStack,
  LibraryStack,
  languageStack,
} from "./stack";

export default function Technologies() {
  return (
    <ElementInView className="pt-20" hash="skills">
      <h2 className="text-xs text-faded_text tracking-wider uppercase mb-8">
        technologies
      </h2>

      <Technology title="Languages" images={languageStack} />
      <Technology title="Frameworks" images={FrameworkStack} />
      <Technology title="Libraries" images={LibraryStack} />
      <Technology title="Databases" images={DatabaseStack} />
      <Technology title="Environments" images={EnvironmentStack} />
      <Technology title="Familiar with" images={FamiliarWithStack} />
    </ElementInView>
  );
}
