import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueRegistryArgs {
  description?: string;
  registry_name: string;
  tags?: { [key: string]: string };
}

export class aws_glue_registry extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGlueRegistryArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_glue_registry", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get registry_name(): string {
    return `${this.resourceType}.${this.resourceName}.registry_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
