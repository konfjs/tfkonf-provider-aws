import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTransferProfileArgs {
  as2_id: string;
  certificate_ids?: string[];
  profile_type: string;
  tags?: { [key: string]: string };
}

export class aws_transfer_profile extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsTransferProfileArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_transfer_profile", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get as2_id(): string {
    return `${this.resourceType}.${this.resourceName}.as2_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get profile_id(): string {
    return `${this.resourceType}.${this.resourceName}.profile_id`;
  }

  get profile_type(): string {
    return `${this.resourceType}.${this.resourceName}.profile_type`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
