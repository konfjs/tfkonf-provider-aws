import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDevopsguruEventSourcesConfigArgsEventSourcesAmazonCodeGuruProfiler {
  status: string;
}

export interface AwsDevopsguruEventSourcesConfigArgsEventSources {
  amazon_code_guru_profiler?: AwsDevopsguruEventSourcesConfigArgsEventSourcesAmazonCodeGuruProfiler[];
}

export interface AwsDevopsguruEventSourcesConfigArgs {
  event_sources?: AwsDevopsguruEventSourcesConfigArgsEventSources[];
}

export class aws_devopsguru_event_sources_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDevopsguruEventSourcesConfigArgs) {
    const meta = {event_sources:{isBlock:true,amazon_code_guru_profiler:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_devopsguru_event_sources_config", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
