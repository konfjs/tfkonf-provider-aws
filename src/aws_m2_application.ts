import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsM2ApplicationArgsDefinition {
  content?: string;
  s3_location?: string;
}

export interface AwsM2ApplicationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsM2ApplicationArgs {
  description?: string;
  engine_type: string;
  kms_key_id?: string;
  name: string;
  role_arn?: string;
  tags?: { [key: string]: string };
  definition?: AwsM2ApplicationArgsDefinition[];
  timeouts?: AwsM2ApplicationArgsTimeouts;
}

export class aws_m2_application extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsM2ApplicationArgs) {
    const meta = {definition:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_m2_application", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get current_version(): string {
    return `${this.resourceType}.${this.resourceName}.current_version`;
  }

  get engine_type(): string {
    return `${this.resourceType}.${this.resourceName}.engine_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
