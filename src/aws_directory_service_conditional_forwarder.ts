import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDirectoryServiceConditionalForwarderArgs {
  directory_id: string;
  dns_ips: string[];
  remote_domain_name: string;
}

export class aws_directory_service_conditional_forwarder extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDirectoryServiceConditionalForwarderArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_directory_service_conditional_forwarder", resourceName);
  }

  get directory_id(): string {
    return `${this.resourceType}.${this.resourceName}.directory_id`;
  }

  get dns_ips(): string {
    return `${this.resourceType}.${this.resourceName}.dns_ips`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get remote_domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.remote_domain_name`;
  }
}
