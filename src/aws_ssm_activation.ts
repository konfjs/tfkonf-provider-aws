import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmActivationArgs {
  description?: string;
  iam_role: string;
  name?: string;
  registration_limit?: number;
  tags?: { [key: string]: string };
}

export class aws_ssm_activation extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSsmActivationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ssm_activation", resourceName);
  }

  get activation_code(): string {
    return `${this.resourceType}.${this.resourceName}.activation_code`;
  }

  get expiration_date(): string {
    return `${this.resourceType}.${this.resourceName}.expiration_date`;
  }

  get expired(): string {
    return `${this.resourceType}.${this.resourceName}.expired`;
  }

  get iam_role(): string {
    return `${this.resourceType}.${this.resourceName}.iam_role`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get registration_count(): string {
    return `${this.resourceType}.${this.resourceName}.registration_count`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
