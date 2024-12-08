import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerMlflowTrackingServerArgs {
  artifact_store_uri: string;
  automatic_model_registration?: boolean;
  role_arn: string;
  tags?: { [key: string]: string };
  tracking_server_name: string;
  tracking_server_size?: string;
}

export class aws_sagemaker_mlflow_tracking_server extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSagemakerMlflowTrackingServerArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_mlflow_tracking_server", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get artifact_store_uri(): string {
    return `${this.resourceType}.${this.resourceName}.artifact_store_uri`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get mlflow_version(): string {
    return `${this.resourceType}.${this.resourceName}.mlflow_version`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get tracking_server_name(): string {
    return `${this.resourceType}.${this.resourceName}.tracking_server_name`;
  }

  get tracking_server_url(): string {
    return `${this.resourceType}.${this.resourceName}.tracking_server_url`;
  }

  get weekly_maintenance_window_start(): string {
    return `${this.resourceType}.${this.resourceName}.weekly_maintenance_window_start`;
  }
}
