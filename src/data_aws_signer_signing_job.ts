import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSignerSigningJobArgs {
  job_id: string;
}

export class data_aws_signer_signing_job extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSignerSigningJobArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_signer_signing_job", resourceName);
  }

  get completed_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.completed_at`;
  }

  get created_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get job_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.job_id`;
  }

  get job_invoker(): string {
    return `data.${this.resourceType}.${this.resourceName}.job_invoker`;
  }

  get job_owner(): string {
    return `data.${this.resourceType}.${this.resourceName}.job_owner`;
  }

  get platform_display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.platform_display_name`;
  }

  get platform_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.platform_id`;
  }

  get profile_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.profile_name`;
  }

  get profile_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.profile_version`;
  }

  get requested_by(): string {
    return `data.${this.resourceType}.${this.resourceName}.requested_by`;
  }

  get revocation_record(): string {
    return `data.${this.resourceType}.${this.resourceName}.revocation_record`;
  }

  get signature_expires_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.signature_expires_at`;
  }

  get signed_object(): string {
    return `data.${this.resourceType}.${this.resourceName}.signed_object`;
  }

  get source(): string {
    return `data.${this.resourceType}.${this.resourceName}.source`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get status_reason(): string {
    return `data.${this.resourceType}.${this.resourceName}.status_reason`;
  }
}
