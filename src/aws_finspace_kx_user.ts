import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFinspaceKxUserArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFinspaceKxUserArgs {
  environment_id: string;
  iam_role: string;
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsFinspaceKxUserArgsTimeouts;
}

export class aws_finspace_kx_user extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsFinspaceKxUserArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_finspace_kx_user", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get environment_id(): string {
    return `${this.resourceType}.${this.resourceName}.environment_id`;
  }

  get iam_role(): string {
    return `${this.resourceType}.${this.resourceName}.iam_role`;
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
