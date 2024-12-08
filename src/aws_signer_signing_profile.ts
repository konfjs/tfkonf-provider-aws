import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSignerSigningProfileArgsSignatureValidityPeriod {
  type: string;
  value: number;
}

export interface AwsSignerSigningProfileArgsSigningMaterial {
  certificate_arn: string;
}

export interface AwsSignerSigningProfileArgs {
  platform_id: string;
  tags?: { [key: string]: string };
  signature_validity_period?: AwsSignerSigningProfileArgsSignatureValidityPeriod;
  signing_material?: AwsSignerSigningProfileArgsSigningMaterial;
}

export class aws_signer_signing_profile extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSignerSigningProfileArgs) {
    const meta = {signature_validity_period:{isBlock:true},signing_material:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_signer_signing_profile", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get platform_display_name(): string {
    return `${this.resourceType}.${this.resourceName}.platform_display_name`;
  }

  get platform_id(): string {
    return `${this.resourceType}.${this.resourceName}.platform_id`;
  }

  get revocation_record(): string {
    return `${this.resourceType}.${this.resourceName}.revocation_record`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }

  get version_arn(): string {
    return `${this.resourceType}.${this.resourceName}.version_arn`;
  }
}
