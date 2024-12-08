import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2InstanceConnectEndpointArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEc2InstanceConnectEndpointArgs {
  subnet_id: string;
  tags?: { [key: string]: string };
  timeouts?: AwsEc2InstanceConnectEndpointArgsTimeouts;
}

export class aws_ec2_instance_connect_endpoint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2InstanceConnectEndpointArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_instance_connect_endpoint", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get fips_dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.fips_dns_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get network_interface_ids(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface_ids`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get preserve_client_ip(): string {
    return `${this.resourceType}.${this.resourceName}.preserve_client_ip`;
  }

  get security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
