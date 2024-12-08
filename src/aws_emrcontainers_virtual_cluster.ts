import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEmrcontainersVirtualClusterArgsContainerProviderInfoEksInfo {
  namespace?: string;
}

export interface AwsEmrcontainersVirtualClusterArgsContainerProviderInfo {
  eks_info: AwsEmrcontainersVirtualClusterArgsContainerProviderInfoEksInfo;
}

export interface AwsEmrcontainersVirtualClusterArgsContainerProvider {
  id: string;
  type: string;
  info: AwsEmrcontainersVirtualClusterArgsContainerProviderInfo;
}

export interface AwsEmrcontainersVirtualClusterArgsTimeouts {
  delete?: string;
}

export interface AwsEmrcontainersVirtualClusterArgs {
  name: string;
  tags?: { [key: string]: string };
  container_provider: AwsEmrcontainersVirtualClusterArgsContainerProvider;
  timeouts?: AwsEmrcontainersVirtualClusterArgsTimeouts;
}

export class aws_emrcontainers_virtual_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEmrcontainersVirtualClusterArgs) {
    const meta = {container_provider:{isBlock:true,info:{isBlock:true,eks_info:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_emrcontainers_virtual_cluster", resourceName);
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
