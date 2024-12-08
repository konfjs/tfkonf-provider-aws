import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerCoreNetworkPolicyAttachmentArgsTimeouts {
  update?: string;
}

export interface AwsNetworkmanagerCoreNetworkPolicyAttachmentArgs {
  core_network_id: string;
  policy_document: string;
  timeouts?: AwsNetworkmanagerCoreNetworkPolicyAttachmentArgsTimeouts;
}

export class aws_networkmanager_core_network_policy_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsNetworkmanagerCoreNetworkPolicyAttachmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_core_network_policy_attachment", resourceName);
  }

  get core_network_id(): string {
    return `${this.resourceType}.${this.resourceName}.core_network_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_document(): string {
    return `${this.resourceType}.${this.resourceName}.policy_document`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
