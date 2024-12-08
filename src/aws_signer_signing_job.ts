import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSignerSigningJobArgsDestinationS3 {
  bucket: string;
  prefix?: string;
}

export interface AwsSignerSigningJobArgsDestination {
  s3: AwsSignerSigningJobArgsDestinationS3;
}

export interface AwsSignerSigningJobArgsSourceS3 {
  bucket: string;
  key: string;
  version: string;
}

export interface AwsSignerSigningJobArgsSource {
  s3: AwsSignerSigningJobArgsSourceS3;
}

export interface AwsSignerSigningJobArgs {
  ignore_signing_job_failure?: boolean;
  profile_name: string;
  destination: AwsSignerSigningJobArgsDestination;
  source: AwsSignerSigningJobArgsSource;
}

export class aws_signer_signing_job extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSignerSigningJobArgs) {
    const meta = {destination:{isBlock:true,s3:{isBlock:true}},source:{isBlock:true,s3:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_signer_signing_job", resourceName);
  }

  get completed_at(): string {
    return `${this.resourceType}.${this.resourceName}.completed_at`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get job_id(): string {
    return `${this.resourceType}.${this.resourceName}.job_id`;
  }

  get job_invoker(): string {
    return `${this.resourceType}.${this.resourceName}.job_invoker`;
  }

  get job_owner(): string {
    return `${this.resourceType}.${this.resourceName}.job_owner`;
  }

  get platform_display_name(): string {
    return `${this.resourceType}.${this.resourceName}.platform_display_name`;
  }

  get platform_id(): string {
    return `${this.resourceType}.${this.resourceName}.platform_id`;
  }

  get profile_name(): string {
    return `${this.resourceType}.${this.resourceName}.profile_name`;
  }

  get profile_version(): string {
    return `${this.resourceType}.${this.resourceName}.profile_version`;
  }

  get requested_by(): string {
    return `${this.resourceType}.${this.resourceName}.requested_by`;
  }

  get revocation_record(): string {
    return `${this.resourceType}.${this.resourceName}.revocation_record`;
  }

  get signature_expires_at(): string {
    return `${this.resourceType}.${this.resourceName}.signature_expires_at`;
  }

  get signed_object(): string {
    return `${this.resourceType}.${this.resourceName}.signed_object`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get status_reason(): string {
    return `${this.resourceType}.${this.resourceName}.status_reason`;
  }
}
