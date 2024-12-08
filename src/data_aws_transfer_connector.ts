import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsTransferConnectorArgs {
  id: string;
}

export class data_aws_transfer_connector extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsTransferConnectorArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_transfer_connector", resourceName);
  }

  get access_role(): string {
    return `data.${this.resourceType}.${this.resourceName}.access_role`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get as2_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.as2_config`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get logging_role(): string {
    return `data.${this.resourceType}.${this.resourceName}.logging_role`;
  }

  get security_policy_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_policy_name`;
  }

  get service_managed_egress_ip_addresses(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_managed_egress_ip_addresses`;
  }

  get sftp_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.sftp_config`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get url(): string {
    return `data.${this.resourceType}.${this.resourceName}.url`;
  }
}
