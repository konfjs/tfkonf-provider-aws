import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerCoreNetworkArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsNetworkmanagerCoreNetworkArgs {
  base_policy_document?: string;
  base_policy_region?: string;
  base_policy_regions?: string[];
  create_base_policy?: boolean;
  description?: string;
  global_network_id: string;
  tags?: { [key: string]: string };
  timeouts?: AwsNetworkmanagerCoreNetworkArgsTimeouts;
}

export class aws_networkmanager_core_network extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkmanagerCoreNetworkArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_core_network", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get edges(): string {
    return `${this.resourceType}.${this.resourceName}.edges`;
  }

  get global_network_id(): string {
    return `${this.resourceType}.${this.resourceName}.global_network_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get segments(): string {
    return `${this.resourceType}.${this.resourceName}.segments`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
