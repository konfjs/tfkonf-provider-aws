import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTransferSshKeyArgs {
  body: string;
  server_id: string;
  user_name: string;
}

export class aws_transfer_ssh_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsTransferSshKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_transfer_ssh_key", resourceName);
  }

  get body(): string {
    return `${this.resourceType}.${this.resourceName}.body`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get server_id(): string {
    return `${this.resourceType}.${this.resourceName}.server_id`;
  }

  get ssh_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.ssh_key_id`;
  }

  get user_name(): string {
    return `${this.resourceType}.${this.resourceName}.user_name`;
  }
}
