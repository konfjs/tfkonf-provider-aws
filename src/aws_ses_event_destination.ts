import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesEventDestinationArgsCloudwatchDestination {
  default_value: string;
  dimension_name: string;
  value_source: string;
}

export interface AwsSesEventDestinationArgsKinesisDestination {
  role_arn: string;
  stream_arn: string;
}

export interface AwsSesEventDestinationArgsSnsDestination {
  topic_arn: string;
}

export interface AwsSesEventDestinationArgs {
  configuration_set_name: string;
  enabled?: boolean;
  matching_types: string[];
  name: string;
  cloudwatch_destination?: AwsSesEventDestinationArgsCloudwatchDestination[];
  kinesis_destination?: AwsSesEventDestinationArgsKinesisDestination;
  sns_destination?: AwsSesEventDestinationArgsSnsDestination;
}

export class aws_ses_event_destination extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSesEventDestinationArgs) {
    const meta = {cloudwatch_destination:{isBlock:true},kinesis_destination:{isBlock:true},sns_destination:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ses_event_destination", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get configuration_set_name(): string {
    return `${this.resourceType}.${this.resourceName}.configuration_set_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get matching_types(): string {
    return `${this.resourceType}.${this.resourceName}.matching_types`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
