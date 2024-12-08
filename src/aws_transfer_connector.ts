import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTransferConnectorArgsAs2Config {
  compression: string;
  encryption_algorithm: string;
  local_profile_id: string;
  mdn_response: string;
  mdn_signing_algorithm?: string;
  message_subject?: string;
  partner_profile_id: string;
  signing_algorithm: string;
}

export interface AwsTransferConnectorArgsSftpConfig {
  trusted_host_keys?: string[];
  user_secret_id?: string;
}

export interface AwsTransferConnectorArgs {
  access_role: string;
  logging_role?: string;
  tags?: { [key: string]: string };
  url: string;
  as2_config?: AwsTransferConnectorArgsAs2Config;
  sftp_config?: AwsTransferConnectorArgsSftpConfig;
}

export class aws_transfer_connector extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsTransferConnectorArgs) {
    const meta = {as2_config:{isBlock:true},sftp_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_transfer_connector", resourceName);
  }

  get access_role(): string {
    return `${this.resourceType}.${this.resourceName}.access_role`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get connector_id(): string {
    return `${this.resourceType}.${this.resourceName}.connector_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get security_policy_name(): string {
    return `${this.resourceType}.${this.resourceName}.security_policy_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get url(): string {
    return `${this.resourceType}.${this.resourceName}.url`;
  }
}
