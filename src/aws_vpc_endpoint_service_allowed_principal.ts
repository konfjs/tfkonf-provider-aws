import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcEndpointServiceAllowedPrincipalArgs {
  principal_arn: string;
  vpc_endpoint_service_id: string;
}

export class aws_vpc_endpoint_service_allowed_principal extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcEndpointServiceAllowedPrincipalArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpc_endpoint_service_allowed_principal", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get principal_arn(): string {
    return `${this.resourceType}.${this.resourceName}.principal_arn`;
  }

  get vpc_endpoint_service_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_endpoint_service_id`;
  }
}
