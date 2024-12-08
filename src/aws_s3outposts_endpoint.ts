import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3outpostsEndpointArgs {
  customer_owned_ipv4_pool?: string;
  outpost_id: string;
  security_group_id: string;
  subnet_id: string;
}

export class aws_s3outposts_endpoint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3outpostsEndpointArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_s3outposts_endpoint", resourceName);
  }

  get access_type(): string {
    return `${this.resourceType}.${this.resourceName}.access_type`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.cidr_block`;
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get network_interfaces(): string {
    return `${this.resourceType}.${this.resourceName}.network_interfaces`;
  }

  get outpost_id(): string {
    return `${this.resourceType}.${this.resourceName}.outpost_id`;
  }

  get security_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_id`;
  }

  get subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_id`;
  }
}
