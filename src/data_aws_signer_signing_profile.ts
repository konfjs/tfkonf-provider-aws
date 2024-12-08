import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSignerSigningProfileArgs {
  name: string;
}

export class data_aws_signer_signing_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSignerSigningProfileArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_signer_signing_profile", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get platform_display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.platform_display_name`;
  }

  get platform_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.platform_id`;
  }

  get revocation_record(): string {
    return `data.${this.resourceType}.${this.resourceName}.revocation_record`;
  }

  get signature_validity_period(): string {
    return `data.${this.resourceType}.${this.resourceName}.signature_validity_period`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }

  get version_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_arn`;
  }
}
