import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEmrStudioSessionMappingArgs {
  identity_type: string;
  session_policy_arn: string;
  studio_id: string;
}

export class aws_emr_studio_session_mapping extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEmrStudioSessionMappingArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_emr_studio_session_mapping", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_id(): string {
    return `${this.resourceType}.${this.resourceName}.identity_id`;
  }

  get identity_name(): string {
    return `${this.resourceType}.${this.resourceName}.identity_name`;
  }

  get identity_type(): string {
    return `${this.resourceType}.${this.resourceName}.identity_type`;
  }

  get session_policy_arn(): string {
    return `${this.resourceType}.${this.resourceName}.session_policy_arn`;
  }

  get studio_id(): string {
    return `${this.resourceType}.${this.resourceName}.studio_id`;
  }
}
