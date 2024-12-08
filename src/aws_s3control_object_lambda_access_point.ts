import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3controlObjectLambdaAccessPointArgsConfigurationTransformationConfigurationContentTransformationAwsLambda {
  function_arn: string;
  function_payload?: string;
}

export interface AwsS3controlObjectLambdaAccessPointArgsConfigurationTransformationConfigurationContentTransformation {
  aws_lambda: AwsS3controlObjectLambdaAccessPointArgsConfigurationTransformationConfigurationContentTransformationAwsLambda;
}

export interface AwsS3controlObjectLambdaAccessPointArgsConfigurationTransformationConfiguration {
  actions: string[];
  content_transformation: AwsS3controlObjectLambdaAccessPointArgsConfigurationTransformationConfigurationContentTransformation;
}

export interface AwsS3controlObjectLambdaAccessPointArgsConfiguration {
  allowed_features?: string[];
  cloud_watch_metrics_enabled?: boolean;
  supporting_access_point: string;
  transformation_configuration: AwsS3controlObjectLambdaAccessPointArgsConfigurationTransformationConfiguration[];
}

export interface AwsS3controlObjectLambdaAccessPointArgs {
  name: string;
  configuration: AwsS3controlObjectLambdaAccessPointArgsConfiguration;
}

export class aws_s3control_object_lambda_access_point extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3controlObjectLambdaAccessPointArgs) {
    const meta = {configuration:{isBlock:true,transformation_configuration:{isBlock:true,content_transformation:{isBlock:true,aws_lambda:{isBlock:true}}}}};
    super(terraformConfig, "resource", args, meta, "aws_s3control_object_lambda_access_point", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get alias(): string {
    return `${this.resourceType}.${this.resourceName}.alias`;
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
}
