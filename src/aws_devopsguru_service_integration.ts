import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDevopsguruServiceIntegrationArgsKmsServerSideEncryption {
}

export interface AwsDevopsguruServiceIntegrationArgsLogsAnomalyDetection {
}

export interface AwsDevopsguruServiceIntegrationArgsOpsCenter {
}

export interface AwsDevopsguruServiceIntegrationArgs {
  kms_server_side_encryption?: AwsDevopsguruServiceIntegrationArgsKmsServerSideEncryption[];
  logs_anomaly_detection?: AwsDevopsguruServiceIntegrationArgsLogsAnomalyDetection[];
  ops_center?: AwsDevopsguruServiceIntegrationArgsOpsCenter[];
}

export class aws_devopsguru_service_integration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDevopsguruServiceIntegrationArgs) {
    const meta = {kms_server_side_encryption:{isBlock:true},logs_anomaly_detection:{isBlock:true},ops_center:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_devopsguru_service_integration", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
