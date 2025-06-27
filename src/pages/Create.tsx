import { Container } from "@/components";
import Editor from "@/components/Editor";
import { Input } from "@/components/ui/input";

function CreatePage() {
  return (
    <Container className="flex-grow flex flex-col gap-2">
      <section className="bg-secondary">
        {/* <Input placeholder="New Post" />
        <Input /> */}
      </section>
      <Editor className="bg-secondary flex-grow" />
    </Container>
  );
}

export default CreatePage;
