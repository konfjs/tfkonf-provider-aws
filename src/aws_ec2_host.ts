import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2HostArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEc2HostArgs {
  auto_placement?: string;
  availability_zone: string;
  host_recovery?: string;
  instance_family?: string;
  instance_type?: string;
  outpost_arn?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsEc2HostArgsTimeouts;
}

export class aws_ec2_host extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2HostArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_host", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get asset_id(): string {
    return `${this.resourceType}.${this.resourceName}.asset_id`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
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
}
