import { Badge } from "./badge";
import { Progress } from "./progress";

// Simple test to verify components can be imported
export const TestComponents = () => {
  return (
    <div>
      <Badge variant="secondary">Test Badge</Badge>
      <Progress value={50} />
    </div>
  );
};
