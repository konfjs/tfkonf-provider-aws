import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApigatewayv2DeploymentArgs {
  api_id: string;
  description?: string;
  triggers?: { [key: string]: string };
}

export class aws_apigatewayv2_deployment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApigatewayv2DeploymentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_apigatewayv2_deployment", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get auto_deployed(): string {
    return `${this.resourceType}.${this.resourceName}.auto_deployed`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
