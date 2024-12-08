import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIvsPlaybackKeyPairArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsIvsPlaybackKeyPairArgs {
  public_key: string;
  tags?: { [key: string]: string };
  timeouts?: AwsIvsPlaybackKeyPairArgsTimeouts;
}

export class aws_ivs_playback_key_pair extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIvsPlaybackKeyPairArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ivs_playback_key_pair", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get public_key(): string {
    return `${this.resourceType}.${this.resourceName}.public_key`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
