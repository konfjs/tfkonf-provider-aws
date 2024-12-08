import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerVpcAttachmentArgsOptions {
  appliance_mode_support?: boolean;
  ipv6_support?: boolean;
}

export interface AwsNetworkmanagerVpcAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsNetworkmanagerVpcAttachmentArgs {
  core_network_id: string;
  subnet_arns: string[];
  tags?: { [key: string]: string };
  vpc_arn: string;
  options?: AwsNetworkmanagerVpcAttachmentArgsOptions;
  timeouts?: AwsNetworkmanagerVpcAttachmentArgsTimeouts;
}

export class aws_networkmanager_vpc_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkmanagerVpcAttachmentArgs) {
    const meta = {options:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_vpc_attachment", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get attachment_policy_rule_number(): string {
    return `${this.resourceType}.${this.resourceName}.attachment_policy_rule_number`;
  }

  get attachment_type(): string {
    return `${this.resourceType}.${this.resourceName}.attachment_type`;
  }

  get core_network_arn(): string {
    return `${this.resourceType}.${this.resourceName}.core_network_arn`;
  }

  get core_network_id(): string {
    return `${this.resourceType}.${this.resourceName}.core_network_id`;
  }

  get edge_location(): string {
    return `${this.resourceType}.${this.resourceName}.edge_location`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_account_id`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get segment_name(): string {
    return `${this.resourceType}.${this.resourceName}.segment_name`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get subnet_arns(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_arns`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_arn(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_arn`;
  }
}
