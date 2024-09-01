import { ContentLayout } from "@/components/ContentLayout";
import ApiKeyInput from "@/components/input/ApiKeyInput";

export default function ApiKeyPage() {
  return (
    <ContentLayout title="API Keys">
      <ApiKeyInput />
    </ContentLayout>
  );
}
