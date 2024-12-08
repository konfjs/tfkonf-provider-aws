import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightVpcConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsQuicksightVpcConnectionArgs {
  dns_resolvers?: string[];
  name: string;
  role_arn: string;
  security_group_ids: string[];
  subnet_ids: string[];
  tags?: { [key: string]: string };
  vpc_connection_id: string;
  timeouts?: AwsQuicksightVpcConnectionArgsTimeouts;
}

export class aws_quicksight_vpc_connection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsQuicksightVpcConnectionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_quicksight_vpc_connection", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_status(): string {
    return `${this.resourceType}.${this.resourceName}.availability_status`;
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_connection_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_connection_id`;
  }
}
