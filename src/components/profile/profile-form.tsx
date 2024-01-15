"use client";

import * as React from "react";
import { toast } from "sonner";
import { useLocalStorage } from "usehooks-ts";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { InputProfileSchema, InputProfileType } from "@/schema/profile-input";
import { Form } from "@/components/ui/form";
import { useFieldToggle } from "@/hooks/use-field-toggle";
import ProfilePreview from "@/components/profile/profile-preview";
import BackgroundImage from "@/components/profile/input/background-image";
import ProfileImage from "@/components/profile/input/profile-image";
import ProfileInputGroup from "@/components/profile/input/profile-input-group";
import PortofolioInputGroup from "@/components/profile/input/portofolio-input-group";
import ProfileWrapper from "@/components/profile/profile-wrapper";
import { MAX_PORTOFOLIO_FIELD } from "@/config";

const ProfileForm = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [localPorto, setLocalPorto] = useLocalStorage<InputProfileType | null>(
    "porto",
    null
  );
  const {
    state,
    actions: {
      toggleBgImage,
      togglePortfolio,
      toggleProfile,
      toggleProfileImage,
    },
  } = useFieldToggle();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<InputProfileType>({
    resolver: zodResolver(InputProfileSchema),
    defaultValues: {
      backgroundImage: localPorto?.backgroundImage || undefined,
      profileImage: localPorto?.profileImage || undefined,
      profileName: localPorto?.profileName || "",
      profileTitle: localPorto?.profileTitle || "",
      profileDescription: localPorto?.profileDescription || "",
      portofolio: localPorto?.portofolio || [
        {
          portofolioPosition: "",
          portofolioCompany: "",
          portofolioStart: "",
          portofolioEnd: "",
          portofolioDescription: "",
        },
      ],
    },
  });
  const {
    control,
    watch,
    reset,
    handleSubmit,
    setValue,
    formState: { isDirty },
  } = form;

  const watchedForm = watch();

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "portofolio",
  });

  const handleToggleForm = (formId: number) => {
    togglePortfolio(formId);
  };

  const onSubmit = async (values: InputProfileType) => {
    if (fields.length >= MAX_PORTOFOLIO_FIELD) return;

    const portoData = {
      ...values,
      backgroundImage: values.backgroundImage,
      profileImage: values.profileImage,
    };

    setLocalPorto(portoData);
    toast.success("Profile berhasil disimpan");
    reset(values, { keepValues: true });
  };

  if (!isMounted) return null;

  return (
    <ProfileWrapper
      append={append}
      isDirty={isDirty}
      fieldLimit={fields.length}
    >
      <div className="w-full">
        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 w-full"
            id="profile-post-form"
          >
            <BackgroundImage
              control={control}
              state={state}
              setValue={setValue}
              toggleBgImage={toggleBgImage}
            />
            <ProfileImage
              control={control}
              setValue={setValue}
              state={state}
              toggleProfileImage={toggleProfileImage}
            />
            <ProfileInputGroup
              control={control}
              state={state}
              toggleProfile={toggleProfile}
            />
            {/* DYNAMIC PORTOFOLIO INPUT START */}
            <PortofolioInputGroup
              fields={fields}
              handleToggleForm={handleToggleForm}
              state={state}
              remove={remove}
              form={form}
            />
            {/* DYNAMIC PORTOFOLIO INPUT END */}
          </form>
        </Form>
      </div>
      <div className="w-full">
        {/* Preview */}
        <ProfilePreview watchedForm={watchedForm} />
      </div>
    </ProfileWrapper>
  );
};
export default ProfileForm;
