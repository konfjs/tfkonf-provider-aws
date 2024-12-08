import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2TransitGatewayAttachmentArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2TransitGatewayAttachmentArgs {
  filter?: DataAwsEc2TransitGatewayAttachmentArgsFilter[];
}

export class data_aws_ec2_transit_gateway_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2TransitGatewayAttachmentArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_transit_gateway_attachment", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get association_state(): string {
    return `data.${this.resourceType}.${this.resourceName}.association_state`;
  }

  get association_transit_gateway_route_table_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.association_transit_gateway_route_table_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_id`;
  }

  get resource_owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_owner_id`;
  }

  get resource_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_type`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get transit_gateway_attachment_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_attachment_id`;
  }

  get transit_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_id`;
  }

  get transit_gateway_owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_owner_id`;
  }
}
