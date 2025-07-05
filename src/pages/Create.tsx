import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Container, Logo, Editor, PostPreview } from "../components";
import { useSelector } from "react-redux";
import type { StoreState } from "@/services/redux";
import { useNavigate } from "react-router";

const Create = () => {
  const navigate = useNavigate()
  const post = useSelector((state: StoreState) => state.post);

  const onSubmit = () => {
    console.log(post);
  };
  const onCacel = ()=>{
    navigate("/")
  }

  return (
    <Container className="flex-1">
      <Tabs defaultValue="edit" className="flex-1 flex">
        <section className=" flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <Logo />
            Create Post
          </div>
          <TabsList>
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
        </section>
        <TabsContent className="flex-1 flex" value="edit">
          <Editor />
        </TabsContent>
        <TabsContent className="flex-1 flex" value="preview">
          <PostPreview />
        </TabsContent>
        <section className="flex items-center justify-center gap-3">
          <Button onClick={onSubmit}>Uploade</Button>
          <Button variant="outline">Save</Button>
          <Button onClick={onCacel} variant="destructive">Cancel</Button>
        </section>
      </Tabs>
    </Container>
  );
};

export default Create;
