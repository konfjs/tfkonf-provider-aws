import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerGlobalNetworkArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsNetworkmanagerGlobalNetworkArgs {
  description?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsNetworkmanagerGlobalNetworkArgsTimeouts;
}

export class aws_networkmanager_global_network extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkmanagerGlobalNetworkArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_global_network", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
