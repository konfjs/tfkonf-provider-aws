import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTransferAgreementArgs {
  access_role: string;
  base_directory: string;
  description?: string;
  local_profile_id: string;
  partner_profile_id: string;
  server_id: string;
  tags?: { [key: string]: string };
}

export class aws_transfer_agreement extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsTransferAgreementArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_transfer_agreement", resourceName);
  }

  get access_role(): string {
    return `${this.resourceType}.${this.resourceName}.access_role`;
  }

  get agreement_id(): string {
    return `${this.resourceType}.${this.resourceName}.agreement_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get base_directory(): string {
    return `${this.resourceType}.${this.resourceName}.base_directory`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get local_profile_id(): string {
    return `${this.resourceType}.${this.resourceName}.local_profile_id`;
  }

  get partner_profile_id(): string {
    return `${this.resourceType}.${this.resourceName}.partner_profile_id`;
  }

  get server_id(): string {
    return `${this.resourceType}.${this.resourceName}.server_id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
