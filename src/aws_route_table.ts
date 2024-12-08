import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRouteTableArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRouteTableArgs {
  tags?: { [key: string]: string };
  vpc_id: string;
  timeouts?: AwsRouteTableArgsTimeouts;
}

export class aws_route_table extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRouteTableArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route_table", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get propagating_vgws(): string {
    return `${this.resourceType}.${this.resourceName}.propagating_vgws`;
  }

  get route(): string {
    return `${this.resourceType}.${this.resourceName}.route`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
