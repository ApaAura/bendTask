export class Thing {
    id!: number;
    areaId!: number;
    joinedWith!: number;
    sku!: string;
    defaultSku!: string;
    status!: string;
    countActive!: number;

    getStatusClass(group: Thing[]): string {
        const sumCountActive = group.reduce((sum, thing) => sum + thing.countActive, 0);
        if (this.status === 'closed') {
            return 'status status-closed';
        } else if (sumCountActive !== 0) {
            return 'status status-active';
        } else {
            return 'status status-opened';
        }
    }
}
