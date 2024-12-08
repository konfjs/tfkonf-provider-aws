import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKmsExternalKeyArgs {
  bypass_policy_lockout_safety_check?: boolean;
  deletion_window_in_days?: number;
  description?: string;
  key_material_base64?: string;
  tags?: { [key: string]: string };
  valid_to?: string;
}

export class aws_kms_external_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsKmsExternalKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_kms_external_key", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get enabled(): string {
    return `${this.resourceType}.${this.resourceName}.enabled`;
  }

  get expiration_model(): string {
    return `${this.resourceType}.${this.resourceName}.expiration_model`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_state(): string {
    return `${this.resourceType}.${this.resourceName}.key_state`;
  }

  get key_usage(): string {
    return `${this.resourceType}.${this.resourceName}.key_usage`;
  }

  get multi_region(): string {
    return `${this.resourceType}.${this.resourceName}.multi_region`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
