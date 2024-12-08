import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDefaultNetworkAclArgsEgress {
  action: string;
  cidr_block?: string;
  from_port: number;
  icmp_code?: number;
  icmp_type?: number;
  ipv6_cidr_block?: string;
  protocol: string;
  rule_no: number;
  to_port: number;
}

export interface AwsDefaultNetworkAclArgsIngress {
  action: string;
  cidr_block?: string;
  from_port: number;
  icmp_code?: number;
  icmp_type?: number;
  ipv6_cidr_block?: string;
  protocol: string;
  rule_no: number;
  to_port: number;
}

export interface AwsDefaultNetworkAclArgs {
  default_network_acl_id: string;
  subnet_ids?: string[];
  tags?: { [key: string]: string };
  egress?: AwsDefaultNetworkAclArgsEgress[];
  ingress?: AwsDefaultNetworkAclArgsIngress[];
}

export class aws_default_network_acl extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDefaultNetworkAclArgs) {
    const meta = {egress:{isBlock:true},ingress:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_default_network_acl", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_network_acl_id(): string {
    return `${this.resourceType}.${this.resourceName}.default_network_acl_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
