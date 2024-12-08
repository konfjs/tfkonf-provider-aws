import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsTransferServerArgs {
  server_id: string;
}

export class data_aws_transfer_server extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsTransferServerArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_transfer_server", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate`;
  }

  get domain(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain`;
  }

  get endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get endpoint_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint_type`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_provider_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.identity_provider_type`;
  }

  get invocation_role(): string {
    return `data.${this.resourceType}.${this.resourceName}.invocation_role`;
  }

  get logging_role(): string {
    return `data.${this.resourceType}.${this.resourceName}.logging_role`;
  }

  get protocols(): string {
    return `data.${this.resourceType}.${this.resourceName}.protocols`;
  }

  get security_policy_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_policy_name`;
  }

  get server_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.server_id`;
  }

  get structured_log_destinations(): string {
    return `data.${this.resourceType}.${this.resourceName}.structured_log_destinations`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get url(): string {
    return `data.${this.resourceType}.${this.resourceName}.url`;
  }
}
