import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ZoneArgsVpc {
  vpc_id: string;
}

export interface AwsRoute53ZoneArgs {
  comment?: string;
  delegation_set_id?: string;
  force_destroy?: boolean;
  name: string;
  tags?: { [key: string]: string };
  vpc?: AwsRoute53ZoneArgsVpc[];
}

export class aws_route53_zone extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53ZoneArgs) {
    const meta = {vpc:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route53_zone", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_servers(): string {
    return `${this.resourceType}.${this.resourceName}.name_servers`;
  }

  get primary_name_server(): string {
    return `${this.resourceType}.${this.resourceName}.primary_name_server`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.zone_id`;
  }
}
