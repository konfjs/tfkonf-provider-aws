import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSignerSigningProfilePermissionArgs {
  action: string;
  principal: string;
  profile_name: string;
}

export class aws_signer_signing_profile_permission extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSignerSigningProfilePermissionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_signer_signing_profile_permission", resourceName);
  }

  get action(): string {
    return `${this.resourceType}.${this.resourceName}.action`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get principal(): string {
    return `${this.resourceType}.${this.resourceName}.principal`;
  }

  get profile_name(): string {
    return `${this.resourceType}.${this.resourceName}.profile_name`;
  }

  get profile_version(): string {
    return `${this.resourceType}.${this.resourceName}.profile_version`;
  }

  get statement_id(): string {
    return `${this.resourceType}.${this.resourceName}.statement_id`;
  }

  get statement_id_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.statement_id_prefix`;
  }
}
