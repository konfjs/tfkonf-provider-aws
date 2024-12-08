import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTransferServerArgsEndpointDetails {
  address_allocation_ids?: string[];
  subnet_ids?: string[];
  vpc_id?: string;
}

export interface AwsTransferServerArgsProtocolDetails {
}

export interface AwsTransferServerArgsS3StorageOptions {
}

export interface AwsTransferServerArgsWorkflowDetailsOnPartialUpload {
  execution_role: string;
  workflow_id: string;
}

export interface AwsTransferServerArgsWorkflowDetailsOnUpload {
  execution_role: string;
  workflow_id: string;
}

export interface AwsTransferServerArgsWorkflowDetails {
  on_partial_upload?: AwsTransferServerArgsWorkflowDetailsOnPartialUpload;
  on_upload?: AwsTransferServerArgsWorkflowDetailsOnUpload;
}

export interface AwsTransferServerArgs {
  certificate?: string;
  directory_id?: string;
  domain?: string;
  endpoint_type?: string;
  force_destroy?: boolean;
  function?: string;
  host_key?: string;
  identity_provider_type?: string;
  invocation_role?: string;
  logging_role?: string;
  post_authentication_login_banner?: string;
  pre_authentication_login_banner?: string;
  security_policy_name?: string;
  structured_log_destinations?: string[];
  tags?: { [key: string]: string };
  url?: string;
  endpoint_details?: AwsTransferServerArgsEndpointDetails;
  protocol_details?: AwsTransferServerArgsProtocolDetails;
  s3_storage_options?: AwsTransferServerArgsS3StorageOptions;
  workflow_details?: AwsTransferServerArgsWorkflowDetails;
}

export class aws_transfer_server extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsTransferServerArgs) {
    const meta = {endpoint_details:{isBlock:true},protocol_details:{isBlock:true},s3_storage_options:{isBlock:true},workflow_details:{isBlock:true,on_partial_upload:{isBlock:true},on_upload:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_transfer_server", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get host_key_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.host_key_fingerprint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get protocols(): string {
    return `${this.resourceType}.${this.resourceName}.protocols`;
  }

  get sftp_authentication_methods(): string {
    return `${this.resourceType}.${this.resourceName}.sftp_authentication_methods`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
