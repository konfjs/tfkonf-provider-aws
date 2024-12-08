import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueUserDefinedFunctionArgsResourceUris {
  resource_type: string;
  uri: string;
}

export interface AwsGlueUserDefinedFunctionArgs {
  catalog_id?: string;
  class_name: string;
  database_name: string;
  name: string;
  owner_name: string;
  owner_type: string;
  resource_uris?: AwsGlueUserDefinedFunctionArgsResourceUris[];
}

export class aws_glue_user_defined_function extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGlueUserDefinedFunctionArgs) {
    const meta = {resource_uris:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_glue_user_defined_function", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get class_name(): string {
    return `${this.resourceType}.${this.resourceName}.class_name`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get database_name(): string {
    return `${this.resourceType}.${this.resourceName}.database_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owner_name(): string {
    return `${this.resourceType}.${this.resourceName}.owner_name`;
  }

  get owner_type(): string {
    return `${this.resourceType}.${this.resourceName}.owner_type`;
  }
}
