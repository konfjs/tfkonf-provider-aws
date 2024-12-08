import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailContainerServiceDeploymentVersionArgsContainer {
  command?: string[];
  container_name: string;
  environment?: { [key: string]: string };
  image: string;
  ports?: { [key: string]: string };
}

export interface AwsLightsailContainerServiceDeploymentVersionArgsPublicEndpointHealthCheck {
  healthy_threshold?: number;
  interval_seconds?: number;
  path?: string;
  success_codes?: string;
  timeout_seconds?: number;
  unhealthy_threshold?: number;
}

export interface AwsLightsailContainerServiceDeploymentVersionArgsPublicEndpoint {
  container_name: string;
  container_port: number;
  health_check: AwsLightsailContainerServiceDeploymentVersionArgsPublicEndpointHealthCheck;
}

export interface AwsLightsailContainerServiceDeploymentVersionArgsTimeouts {
  create?: string;
}

export interface AwsLightsailContainerServiceDeploymentVersionArgs {
  service_name: string;
  container: AwsLightsailContainerServiceDeploymentVersionArgsContainer[];
  public_endpoint?: AwsLightsailContainerServiceDeploymentVersionArgsPublicEndpoint;
  timeouts?: AwsLightsailContainerServiceDeploymentVersionArgsTimeouts;
}

export class aws_lightsail_container_service_deployment_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLightsailContainerServiceDeploymentVersionArgs) {
    const meta = {container:{isBlock:true},public_endpoint:{isBlock:true,health_check:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_container_service_deployment_version", resourceName);
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get service_name(): string {
    return `${this.resourceType}.${this.resourceName}.service_name`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
